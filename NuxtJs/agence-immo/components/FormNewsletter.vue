<template>
  <div>
    <h2>Subscribe to our newsletter</h2>
    <!-- action="https://formspree.io/f/xbjwyvlv"  -->
    <form @submit.prevent="submit" id="form-newsletter">
        <Input type="email" id="email" name="email" label="Your email:" v-model="input"/>
        <!-- <Input type="checkbox" id="cgu" name="cgu" label="Have you read the cgu?"/> -->
        <Button type="submit" :text_input="text_input"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormNewsletter',
   data () {
      return {
        text_input: "Send",
        input: "",
      }
  },
  methods: {
    submit() {
      console.log(this.input);

        fetch('https://formspree.io/f/xbjwyvlv', {
          method: 'POST',
          body: JSON.stringify({
            'input' : this.input
          }),
          headers: {
              'Accept': 'application/json',
              'Content-type' :  'application/json'
          }
        }).then(response => {
          if (response.ok) {
           console.log("Thanks for your submission! YEAH");
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
               console.log(data["errors"].map(error => error["message"]).join(", "));
              } else {
               console.log("Oops! There was a problem submitting your form");
              }
            })
          }
        }).catch(error => {
         console.log("Oops! There was a problem submitting your form");
        });

    }
  }
}
</script>