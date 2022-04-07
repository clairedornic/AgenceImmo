<template>
  <div>
    <h1>List of real estates</h1>
    <div>
      <ul v-if="realEstates && realEstates.length">
        <li v-for="realEstate in realEstates" :key="realEstate.id">
          <NuxtLink :to="{ name: 'realestate-single', params: { id: realEstate.id, srcImg: realEstate.attributes.Property_head_picture.data.attributes.url } }">
            <h2><strong>{{realEstate.attributes.Title}}</strong></h2>
            <p>City : {{realEstate.attributes.City}}</p>
          </NuxtLink>
        </li>
      </ul>
      <ul v-if="errors && errors.length">
        <li v-for="error in errors" :key="error.id">
          {{error.message}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListRealEstates',
   data () {
      return {
        realEstates: [],
        errors: []
      }
  },
  methods: {
  },
  mounted () {
        // const qs = require('qs');
        // const query = qs.stringify({
        //   populate: 'Property_head_picture',
        // }, {
        //   encodeValuesOnly: true,
        // });
        const access_token = 'f82c785e7c530952f60986e86a9bf4ee80958f1923c151a0aa9ac7e4be88dc18dfc30208ec2835bd898dc5af0c5aa1dca2455a7486bc6ab0d7e13148c3b52d082ea9b93a470a7c6b0fe9b58029c12dbda42d438e4cfc813321cb520d39a8f2605922a0781279665b9e1d34ae3b8b4beb0498d4982d882e6ca76e201e3edfb7aa'
         axios.get(`http://localhost:1337/api/real-estates?populate=Property_head_picture`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
        .then((response ) => {
            console.log(response.data.data);
            this.realEstates = response.data.data;
        })
        .catch((error) => {
            console.log(error);
            this.errors.push(error)
        })
  }
}
</script>