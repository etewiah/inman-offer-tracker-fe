<template>
  <span>
    <div class="row">
      <div class="col s12 m10 l8 offset-l2 offset-m1">
        <ul class="collection with-header">
          <li class="collection-header"><h4>Properties</h4></li>
          <li v-on:click="openModal()" class="collection-item pointer">
            <div>
              <i class="material-icons yellow-text left">add_circle</i>
              <span>Add a New Property</span>
            </div>
          </li>
          <li v-for="property in properties" class="collection-item pointer">
            <router-link to="/offer">
              <div>
                <h6 v-text="property.mls_number" class="red-text darken-4 no-margin" style="display: inline-block"></h6>
                <span class="grey-text lighten-2" style="padding: 0 10px">|</span>
                <span v-text="property.address"></span>
              </div>
            </router-link>
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
import axios from 'axios';
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
      // properties: [],
      newProperty: {
        address: '',
        mls_number: ''
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
