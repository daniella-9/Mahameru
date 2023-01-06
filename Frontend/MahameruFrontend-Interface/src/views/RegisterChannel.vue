<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button color="dark" default-href="tabs/inbox-channel"></ion-back-button>
        </ion-buttons>
        <ion-title>Create Channel</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
     
      
         <center> <img class="import" alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png" /></center>
          <div class="under">
            Upload Image
        </div>
 
       
          <ion-item>
            <ion-label position="stacked">Channel Name*</ion-label>
            <ion-input placeholder="Enter name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Channel Description</ion-label>
            <ion-textarea placeholder="Optional"></ion-textarea>
          </ion-item>
       
    
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-nav-link router-direction="backward" component="component">
                <ion-fab-button  href="/AddMember">
                    <ion-icon :icon="checkmark"></ion-icon>
                </ion-fab-button>
            </ion-nav-link>
            </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonPage, IonToolbar, IonBackButton, IonIcon } from '@ionic/vue';
import { add, checkmark } from 'ionicons/icons';
import { images } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChannelRegis',
  components: {
    IonHeader,
    IonPage,
    IonToolbar,
    IonBackButton,
    IonIcon,
  },
  setup() {
    return { add, images, checkmark };
  },
});
</script>

<style scoped>
.input {
  font-family: 'Manjari';
  font-size: large;
}

ion-col {
  font-family: 'Manjari';
}

ion-row {
  font-family: 'Manjari';
}

ion-button {
  background: transparent;
  --box-shadow: none;
  --color: none;
  --ripple-color: deeppink;
}

ion-label {
  font-weight: 510;
}

.import {
  margin-left: 4.5vw;
  margin-top: 5vw;
  width: 20vw;
  height: 20vw;
  border-radius: 100%;
}

.regis {
  padding-top: 10px;
}
.under{
  font-size: small;
  text-align: center;
  padding-left: 8%;
  padding-top: 5%;
}
</style>