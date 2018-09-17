<template>
<v-layout column>
    <v-flex>
      <panel title="Server config">
            <div>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    hide-actions
                    class="elevation-1">
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.iron }}</td>
                </template>
                </v-data-table>
            </div>
            <div>
                <v-btn color="normal">New Server</v-btn>
            </div>  
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    data () {
    return {
      songs: null,
      headers: [
          { text: 'Instance Flavour', value: 'instanceFlavour', sortable: false },
          { text: 'Description', value: 'description', sortable: false },
          { text: 'Price Per Hour', value: 'pricePerHour', sortable: false },
          { text: 'Estimated 30 Days', value: 'estimated', sortable: false },
          { text: 'Additional network Interface API', value: 'additionalAPI', sortable: false },
          { text: 'Minimun Quantity required', value: 'minQtyReq', sortable: false },
          { text: 'Measurement Unit', value: 'measurementUnit', sortable: false },
          { text: 'Total Estimated bill per month*', value: 'TtlEstBillPerMnth', sortable: false }
        ],
    }
  },
    components: {
        Panel
  },
 
}
</script>

<style scoped>
</style>
