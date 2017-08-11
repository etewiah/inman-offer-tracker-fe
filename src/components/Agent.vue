<template>
  <span>
    <div class="row">
      <div class="col s12 m10 l8 offset-l2 offset-m1">
        <ul class="collection with-header">
          <li class="collection-header"><h2>Properties</h2></li>
          <li v-on:click="openModal()" class="collection-item pointer">
            <div>
              <i class="material-icons yellow-text left">add_circle</i>
              <span class="flow-text">Add a New Property</span>
            </div>
          </li>
          <li v-for="property in properties" class="collection-item pointer">
            <div>
              <router-link :to="'/offer/'+property['.key']">
                <h6 v-text="property.mls_number" class="red-text darken-4 no-margin flow-text" style="display: inline-block"></h6>
                <span class="grey-text lighten-2 flow-text" style="padding: 0 10px">|</span>
                <span class="flow-text" v-text="property.address"></span>
              </router-link>
              <router-link :to="'/buyer/'+property['.key']">
                <span class="grey-text lighten-2 flow-text" style="padding: 0 10px">|</span>
                <span class="flow-text">Buyer View</span>
				      </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>ADD PROPERTY</h4>
        <div class="row">
          <div class="input-field col m7 s12">
            <input v-model="newProperty.address" placeholder=""  id="address" type="text" class="validate" />
            <label for="address">Address</label>
          </div>
          <div class="input-field col m5 s12">
            <input v-model="newProperty.mls_number" placeholder=""  id="mls_number" type="text" class="validate" />
            <label for="mls_number">MLS Number</label>
          </div>
        </div>
      </div>
      <router-link to="/agent">
        <div class="modal-footer" v-on:click="addProperty(newProperty)">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat yellow black-text">ADD</a>
        </div>
      </router-link>
    </div>
  </span>
</template>
<script>
import { db } from '../store/firebase';

export default {

  firebase: {
    properties: {
      source: db.ref('properties'),
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
    }
  },

  data: () => {
    return {
      newProperty: {
        address: '',
        mls_number: '',
        eventId: 1
      }
    }
  },

  methods: {
    loadOffer(link) {
      this.$store.dispatch('offer')
      this.$store.dispatch('offerLink', link)
    },
    openModal() {
      $('#modal1').modal('open');
    },
    addProperty() {
      this.$firebaseRefs.properties.push(this.newProperty)
      this.$router.push('agent')
    }
  },

  mounted() {
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
    });
  }
}

</script>
