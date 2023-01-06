<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
          <ion-back-button color= "dark" default-href="/home"></ion-back-button>
        </ion-buttons>
            <ion-title color="dark">New Channel</ion-title>
          </ion-toolbar>
        </ion-header>
     
        <ion-col class="ion-text-end">
            <ion-badge style="background-color: #FF884B; font-size: 16px; border-radius: 10px; margin-top: 20px; margin-left: 15px;">
                Add Participant
                </ion-badge>
            </ion-col>
         <ion-row>
           <ion-col>
    <img alt="Silhouette of a person's head" src="/assets/carbon_user-avatar-filled-alt.png"/>
            </ion-col>
         </ion-row>
         <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-nav-link router-direction="backward" component="component">
                <ion-fab-button  href="/Register">
                    <ion-icon :icon="checkmark"></ion-icon>
                </ion-fab-button>
            </ion-nav-link>
            </ion-fab>
        </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonBackButton, IonToolbar, IonFab, IonIcon, } from '@ionic/vue';
  import { checkmark } from 'ionicons/icons';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AddMember',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonBackButton,
      IonToolbar,
      IonFab,
      IonIcon,
    },
    setup() {
    return { checkmark, };
  },
  });
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    
    color: #8c8c8c;
    
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  </style>
  