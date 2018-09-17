<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Select a Server">
        <v-data-table
          :headers="headers"
          :items="songs"
          hide-actions
          class="elevation-1">

          <template slot="items" slot-scope="props">
            <td>{{ props.item.serverName }}</td>
            <td class="text-xs-right">{{ "No data" }}</td>
            <td class="text-xs-right">{{ "No data" }}</td>
            <td class="text-xs-right">{{ "No data" }}</td>
            <td class="text-xs-right">{{ "No data" }}</td>
          </template>
        </v-data-table>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import ServerNameService from '@/services/ServerNameService'
import Panel from '@/components/Panel'

export default {
  name: 'ServerSelect',
  data () {
    return {
      songs: null,
      headers: [
          { text: 'Instance sizes and ratios', value: 'server', sortable: false },
          { text: 'vcpu', value: 'vcpu', sortable: false },
          { text: 'mem', value: 'mem', sortable: false },
          { text: 'GB', value: 'GB', sortable: false },
          { text: 'Estimated monthly charge', value: 'emc', sortable: false }
        ],
    }
  },
  components: {
    Panel
  },
  async mounted (){
    console.log('running')
    this.songs = (await ServerNameService.index()).data;
    console.log(this.songs)
  }
  
}
</script>

<style scoped>
</style>
