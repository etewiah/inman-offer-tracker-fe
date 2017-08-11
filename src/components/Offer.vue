<template>
  <span>
    <div class="row center">
      <vue-circle
          id="circle"
          :progress="percentage"
          :size="200"
          :reverse="false"
          ref="percentageCircle"
          line-cap="round"
          empty-fill="rgba(0, 0, 0, .1)"
          :animation-start-value="0.0"
          :start-angle="-1.58"
          insert-mode="append"
          :thickness="10"
          :inner-text="'<h1>'+percentage+'%</h1>'"
          :show-percent="true"
          :fill="{ color: 'rgb(255, 235, 59)' }">
      </vue-circle>
      <p class="col s8 m10 center offset-s2 offset-m1 no-margin" v-text="'MLS NUMBER '+offer.mls_number"></p>
      <h4 class="col s8 m10 center offset-s2 offset-m1 no-margin" v-text="offer.address"></h4>

      <div class="spacer-40"></div>
      <div class="spacer-40"></div>
      <div class="spacer-10"></div>
      <div class="row center">
        <div class="col s8 m10 center offset-s2 offset-m1">
          <div v-for="event in events">
            <input v-if="event.id <= offer.eventId" v-on:click="statusChange(event, event.id-1)" type="checkbox" v-bind:id="event.id" checked="checked" />
            <input v-if="event.id > offer.eventId" v-on:click="statusChange(event, event.id)" type="checkbox" v-bind:id="event.id" />
            <label v-bind:for="event.id"><h5 class="black-text" style="position: relative; bottom:15px;">{{ event.description }}</h5></label>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>
<script>
import VueCircle from 'vue2-circle-progress'
import { db } from '../store/firebase';

export default {
  components: {
    VueCircle
  },

  computed: {
    offerLink() {
      return this.$store.state.offerLink;
    }
  },

  firebase: function () {
    return {
      offer: {
        source: db.ref('properties/' + this.$route.params.id),
        asObject: true,
        // Optional, allows you to handle any errors.
        cancelCallback(err) {
          console.error(err);
        }
      }
    }
  },

  data: () => {
    return {
      // offer: {},
      percentage: 0,
      events: {},
    }
  },

  methods: {
    getOffer() {
      this.events = [{
          'id': 1,
          'status_code': 0,
          'description': 'Ready for Signatures'
        },
        {
          'id': 2,
          'status_code': 0,
          'description': 'Sent to You for Signatures'
        },
        {
          'id': 3,
          'status_code': 0,
          'description': 'Signed and Returned'
        },
        {
          'id': 4,
          'status_code': 0,
          'description': 'Submitted to Listing Agent'
        },
        {
          'id': 5,
          'status_code': 0,
          'description': 'Receipt Confirmed'
        },
        {
          'id': 6,
          'status_code': 0,
          'description': 'Accepted'
        },
      ]
    },

    calculatePercentage() {
      let total = this.events.length;
      let completed = this.offer.eventId;
      // events.forEach(event => {
      //   if (event.status_code) {
      //     completed += 1
      //   }
      // })
      let percentage = parseInt(((completed / total) * 100).toFixed(0))
      this.percentage = percentage
      this.$refs.percentageCircle.updateProgress(percentage)
    },

    statusChange(event, status) {
      // this.events.map(e => {
      //   if (e.id === event.id) {
      //     e.status_code = status;
      //   }
      //   return e;
      // })
      db.ref('properties/' + this.$route.params.id).set({
        address: this.offer.address,
        mls_number: this.offer.mls_number,
        eventId : status
      });

      this.calculatePercentage()
    }
  },

  mounted() {
    this.getOffer()
    this.calculatePercentage(this.events)
  }
}

</script>
<style>
#percent-text {
  top: 25% !important;
  margin-left: -85px !important;
  width: 171px !important;
}

[type="checkbox"]:checked+label:before {
  border-right: 2px solid #b71c1c !important;
  border-bottom: 2px solid #b71c1c !important;
}

</style>
