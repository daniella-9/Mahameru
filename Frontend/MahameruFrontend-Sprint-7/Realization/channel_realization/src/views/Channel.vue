<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Channel List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-accordion-group :multiple="true" :value="['first', 'second']">
        <ion-accordion value="first">
          <ion-item slot="header">
            <ion-label>Your Channel</ion-label>
          </ion-item>
          <div slot="content">
            <ion-list lines="none">
              <ion-item>
                <ion-button fill="clear" href="/Info">
                  <ion-label>Mahameru Project
                  </ion-label>
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>HCI Companion Channel
                  </ion-label>
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>Steam News
                  </ion-label>
                </ion-button>
              </ion-item>
            </ion-list>
          </div>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item slot="header">
            <ion-label>All Channel</ion-label>
          </ion-item>
          <div slot="content">
            <ion-list lines="none">
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>Pokemon Gym
                  </ion-label>
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>HCI Companion Channel
                  </ion-label>
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>Steam News
                  </ion-label>
                </ion-button>
              </ion-item>
            </ion-list>
          </div>
        </ion-accordion>
      </ion-accordion-group>

    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
        <ion-header>
      <ion-toolbar color="primary">
        <ion-button slot="primary">
          <ion-icon fill="none" slot="icon-only" :icon="search">
          </ion-icon>
        </ion-button>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Channel</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list line="none">
        <button>
          <ion-item href="/Inside">
            <ion-col size="2">
              <ion-thumbnail>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </ion-thumbnail>
            </ion-col>
            <ion-col size="10" class="text">
              <ion-row class="channelname">
                Pokemon gym
              </ion-row>
              <ion-row class="channelchat">
                
              </ion-row>
            </ion-col>
          </ion-item>
        </button>
        <button>
          <ion-item href="/Inside">
            <ion-col size="2">
              <ion-thumbnail>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </ion-thumbnail>
            </ion-col>
            <ion-col size="10" class="text">
              <ion-row class="channelname">
                HCI Companion Channel
              </ion-row>
              <ion-row class="channelchat">
                
              </ion-row>
            </ion-col>
          </ion-item>
        </button>
        <button>
          <ion-item href="/Inside">
            <ion-col size="2">
              <ion-thumbnail>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </ion-thumbnail>
            </ion-col>
            <ion-col size="10" class="text">
              <ion-row class="channelname">
                Steam News
              </ion-row>
              <ion-row class="channelchat">
                
              </ion-row>
            </ion-col>
          </ion-item>
        </button>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button  href="/Register">
                    <ion-icon :icon="add" style="font-size: 50px"></ion-icon>
                </ion-fab-button>
            </ion-fab>
    </ion-content>
    </ion-page>
</template>



<script lang="ts">

import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonAccordion, IonAccordionGroup, IonThumbnail } from '@ionic/vue';
import { search, } from "ionicons/icons"
import { defineComponent } from 'vue';
import { 
  IonLabel, 
  IonIcon, 
  IonFab, 
  IonFabButton, 
} from '@ionic/vue';
import { chatbox, home, people, add, personAdd, } from 'ionicons/icons';


export default defineComponent({
  name: 'ChannelOverview',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonThumbnail,
    IonAccordion,
    IonAccordionGroup,
    IonIcon,
    IonFab,
    IonFabButton,
  },
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    }
    const afterTabChange = () => {
      // do something after tab change
    }
    return {
      search,
      chatbox,
      home,
      people,
      personAdd,
      add,
      beforeTabChange,
      afterTabChange,
    }
  }
});
</script>

<style scoped>
ion-list {
  --color: dark;
}

ion-title{
  text-align: left;
  
}

ion-button {
  color: black;
  font-size: small;
  width: 100% auto;
  height: 100%;
}

ion-item {
  font-size: 15px;
  background-color: antiquewhite;
}

ion-card {
  text-align: justify;
  margin: 0;
}


ion-thumbnail {
  --border-radius: 100px;
  --size: auto;
}

.text {
  margin-left: 1vw;
  width: 100%;
  font-size: 16px, large;
}

.channelname {
  font-weight: bold;
  padding-bottom: 2%;
}

ion-button {
  text-align: left;
  text-justify: auto;
  --box-shadow: none;
  --color: none;
  padding-right: 1%;
  height:max-content
}

ion-label {
  text-align: left;
}

ion-icon{
  color: rgb(0, 0, 0);
  margin-left: 70px;
}

ion-fab-button{
  color: rgb(0, 0, 0);
}

</style>