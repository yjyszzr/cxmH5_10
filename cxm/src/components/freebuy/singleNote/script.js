import api from '../../../fetch/api'
import datefilter from '../../../util/datefilter'
import {
  Toast
} from 'mint-ui'
import {
  Indicator
} from 'mint-ui'
export default {
  name: 'singleNote',
  data() {
    return {
      activeName: '1',
      playType: this.$route.query.id,
      lottoyId: this.$route.query.ltId,
      classlootoyId: this.$route.query.cltId,
      leagueId: '',
      matchObj: {},
      flag: true,
      classFlag: true,
      matchSelectObj: new Map(),
      text: '<p>请至少选择1场单关比赛</p><p>或者两场非单关比赛</p>',
      id: '',
      arr: new Set()
    }
  },
  beforeCreate() {
    if (!localStorage.getItem('tab')) {
      Indicator.open()
    }
  },
  components: {

  },
  methods: {
    fetchData() {
      let data = {
        'leagueId': this.leagueId,
        'playType': this.playType
      }
      this.$store.dispatch("getMatchList", data)
    },
    datePd(c) {
      return datefilter(Number(c * 1000), 1)
    },
    activeNameNum(c) {
      if (this.$store.state.matchObj.hotPlayList.length > 0) {
        return Number(c + 2) + ''
      } else {
        return Number(c + 1) + ''
      }
    },
    selectedClick(c) {
      if (c.target.parentElement.parentElement.parentElement.id != this.id) {
        this.arr = new Set()
        for (let [key, value] of this.matchSelectObj) {
          if (c.target.parentElement.parentElement.parentElement.id == key) {
            this.arr = value
          }
        }
        this.id = c.target.parentElement.parentElement.parentElement.id
      }
      if (c.target.parentElement.className == 'selected') {
        c.target.parentElement.className = ''
        if (c.target.parentElement.children[2].innerText.indexOf('主') != -1) {
          this.arr.delete(3)
        } else if (c.target.parentElement.children[2].innerText.indexOf('平') != -1) {
          this.arr.delete(1)
        } else if (c.target.parentElement.children[2].innerText.indexOf('客') != -1) {
          this.arr.delete(0)
        }
        if (this.arr.size <= 0) {
          this.matchSelectObj.delete(c.target.parentElement.parentElement.parentElement.id)
        } else {
          this.matchSelectObj.set(c.target.parentElement.parentElement.parentElement.id, this.arr)
        }
      } else {
        c.target.parentElement.className = 'selected'
        if (c.target.parentElement.children[2].innerText.indexOf('主') != -1) {
          this.arr.add(3)
        } else if (c.target.parentElement.children[2].innerText.indexOf('平') != -1) {
          this.arr.add(1)
        } else if (c.target.parentElement.children[2].innerText.indexOf('客') != -1) {
          this.arr.add(0)
        }
        this.matchSelectObj.set(c.target.parentElement.parentElement.parentElement.id, this.arr)
      }
      if (this.matchSelectObj.size == 1) {
        let classDom = document.getElementsByClassName('selected')
        if (classDom[0].parentElement.parentElement.className == 'single') {
          this.text = `<p>已选1场单关比赛</p><p>可投注</p>`
          this.flag = false
          this.classFlag = false
        } else {
          this.text = `<p>已选择1场比赛</p><p>还差1场比赛</p>`
          this.flag = true
          this.classFlag = true
        }
      } else if (this.matchSelectObj.size == 0) {
        this.text = `<p>请至少选择1场单关比赛</p><p>或者两场非单关比赛</p>`
        this.flag = true
        this.classFlag = true
      } else {
        this.text = `<p>已选${this.matchSelectObj.size}场比赛</p><p>可投注</p>`
        this.flag = false
        this.classFlag = false
      }
    },
    clear_match() {
      this.matchSelectObj.clear()
      this.id = ''
      this.text = `<p>请至少选择1场单关比赛</p><p>或者两场非单关比赛</p>`
      this.flag = true
      this.classFlag = true
      $('.selected').removeClass('selected')
    },
    confirm() {
      this.$store.state.matchSelectedList = []
      this.$store.state.matchObj.hotPlayList.forEach(item => {
        delete item.myspf
        for (let [key, value] of this.matchSelectObj) {
          if (key == item.matchId) {
            item.myspf = Array.from(value)
            this.$store.state.matchSelectedList.push(item)
          }
        }
      });
      this.$store.state.matchObj.playList.forEach(item => {
        for (let i = 0; i < item.playList.length; i++) {
          delete item.playList[i].myspf
          for (let [key, value] of this.matchSelectObj) {
            if (key == item.playList[i].matchId) {
              item.playList[i].myspf = Array.from(value)
              this.$store.state.matchSelectedList.push(item.playList[i])
            }
          }
        }
      });

      this.$router.push({
        path: '/freebuy/cathectic',
        query:{
          playType: this.playType,
          lottoyId: this.lottoyId,
          classlootoyId: this.classlootoyId
        },
        replace: false
      })
    }
  },
  mounted() {
    if (!localStorage.getItem('tab')) {
      this.fetchData()
    } else {
      if (this.$store.state.matchSelectedList.length == 0) {
        this.text = `<p>请至少选择1场单关比赛</p><p>或者两场非单关比赛</p>`
        this.flag = true
        this.classFlag = true
      } else if (this.$store.state.matchSelectedList.length == 1) {
        let classDom = document.getElementsByClassName('selected')
        if (classDom[0].parentElement.parentElement.className == 'single') {
          this.text = `<p>已选1场单关比赛</p><p>可投注</p>`
          this.flag = false
          this.classFlag = false
        } else {
          this.text = `<p>已选择1场比赛</p><p>还差1场比赛</p>`
          this.flag = true
          this.classFlag = true
        }
      } else if (this.$store.state.matchSelectedList.length > 1) {
        this.text = `<p>已选${this.$store.state.matchSelectedList.length}场比赛</p><p>可投注</p>`
        this.flag = false
        this.classFlag = false
      }
      this.$store.state.matchSelectedList.forEach(item => {
        this.matchSelectObj.set(item.matchId, new Set(item.myspf))
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    next()
    this.$store.state.mark_show = false
    localStorage.removeItem('tab')
  }
}