<template>
  <span>
    <div class="row center">
      <div v-for="event in events">
        <div v-if="offer.eventId === event.id">
          <label v-bind:for="event.id"><h4 class="black-text" style="font-weight: 300; padding: 0 10px;">{{ event.description }}</h4></label>
        </div>
      </div>
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
      <p class="col s8 m10 center offset-s2 offset-m1 no-margin large" v-text="offer.address"></p>
      <p class="col s8 m10 center offset-s2 offset-m1 no-margin small" v-text="'MLS NUMBER '+offer.mls_number"></p>
      <div class="spacer-10"></div>
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
      let completed = this.offer.eventId || 1;
      let percentage = parseInt(((completed / total) * 100).toFixed(0))
      this.percentage = percentage
      this.$refs.percentageCircle.updateProgress(percentage)
    },

    statusChange(event, status) {
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
