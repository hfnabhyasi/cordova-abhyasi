<template id="page1">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left"><v-ons-back-button>Home</v-ons-back-button></div>
      <div class="center">10 MAXIMS</div>
    </v-ons-toolbar>

    <CardWithFloralBorder>
      <v-ons-list>
        <DialogListItem
          v-for="(maxim, idx) in maxims"
          :key="idx"
          :cmp="maxim"
        />
      </v-ons-list>
    </CardWithFloralBorder>
  </v-ons-page>
</template>

<style></style>

<script>
import DialogListItem from "../components/dialog-list-item";
import CardWithFloralBorder from "../components/CardWithFloralBorder";

export default {
  key: "TenMaximsPage",
  components: {
    DialogListItem,
    CardWithFloralBorder
  },
  data() {
    return {
      isExpanded: true,
      maxims: {
        Maxim1: {
          properties: {
            title: "Maxim 1",
            content:
              "Rise before dawn and offer your prayer and meditation at a fixed hour, preferably completing them before sunrise.  Have a separate place and seat for meditation.  As far as possible, develop the habit of sitting in one and the same pose.  Give special attention to purity of body and mind."
          }
        },
        Maxim2: {
          properties: {
            title: "Maxim 2",
            content:
              "Begin your meditation with a prayer for spiritual elevation.  Offer your prayer in such a way that the heart is filled with love."
          }
        },
        Maxim3: {
          properties: {
            title: "Maxim 3",
            content:
              "Fix your Goal, which should be complete oneness with God.  Rest not till the ideal is achieved."
          }
        },
        Maxim4: {
          properties: {
            title: "Maxim 4",
            content: "Simplify your life so as to be identical with Nature."
          }
        },
        Maxim5: {
          properties: {
            title: "Maxim 5",
            content:
              "Always be truthful, accept miseries as coming from God for your own good and be thankful."
          }
        },
        Maxim6: {
          properties: {
            title: "Maxim 6",
            content: "Know all people as thy brethren and treat them as such."
          }
        },
        Maxim7: {
          properties: {
            title: "Maxim 7",
            content:
              "If your are feeling wronged by anyone, do not wish for revenge.  Instead, think this comes from God and be grateful."
          }
        },
        Maxim8: {
          properties: {
            title: "Maxim 8",
            content:
              "Be happy to eat in constant Divine thought whatever you get, with due regard to honest and pious earnings."
          }
        },
        Maxim9: {
          properties: {
            title: "Maxim 9",
            content:
              "Mould your behaviour and way of living to such a high order as to rouse a feeling of love and piety in others."
          }
        },
        Maxim10: {
          properties: {
            title: "Maxim 10",
            content:
              "At bedtime, feeling the presence of God, repent for any wrongs committed.  Beg forgiveness in a supplicant mood and prayerfully resolve not to allow repetition of the same."
          }
        }
      }
    };
  }
};
</script>
