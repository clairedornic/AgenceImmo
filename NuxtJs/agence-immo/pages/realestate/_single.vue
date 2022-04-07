<template>
    <div>
        <h1><strong>{{realEstate.attributes.Title}}</strong></h1> 
         <p>{{realEstate.attributes.City}}</p>
         <p><strong>{{realEstate.attributes.Rent}}€</strong> / mois charges comprises</p>
        <img :src="'http://localhost:1337' + this.$route.params.srcImg" alt="" width="250px" height="auto">
        <div>
            <h2>Caractéristiques</h2>
            <p>Surface : {{realEstate.attributes.Area}}</p>
            <p>Nombre de pièces : {{realEstate.attributes.Number_of_room}}</p>
            <p>Quartier : {{realEstate.attributes.Neighborhood}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'single',
   data () {
      return {
        realEstate: null,
        errors: []
      }
  },
  methods: {
  },
  mounted () {
        const access_token = 'f82c785e7c530952f60986e86a9bf4ee80958f1923c151a0aa9ac7e4be88dc18dfc30208ec2835bd898dc5af0c5aa1dca2455a7486bc6ab0d7e13148c3b52d082ea9b93a470a7c6b0fe9b58029c12dbda42d438e4cfc813321cb520d39a8f2605922a0781279665b9e1d34ae3b8b4beb0498d4982d882e6ca76e201e3edfb7aa'
         axios.get(`http://localhost:1337/api/real-estates/${this.$route.params.id}`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
        .then((response ) => {
            console.log('http://localhost:133');
            console.log(response.data.data);
            this.realEstate = response.data.data;
        })
        .catch((error) => {
            console.log(error);
            this.errors.push(error)
        })
  }
}
</script>