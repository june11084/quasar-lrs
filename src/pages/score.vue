<template>
  <q-page class='flex flex-center'>
    <div class='column items-center'>
      <div class='col'>
        <q-uploader
          url='http://localhost:8080/upload'
          label='Upload File'
          multiple
        />
      </div>
      <div class='col' >
        <q-btn @click='getScores' color='primary' label='Get Score'/>
      </div>
      <div class='col'>
        <q-table id='table'
          title='Score'
          :data='data'
          :columns='columns'
          row-key='id'
          dark
          color='amber'
          :pagination.sync= "pagination"
          :visible-columns="visibleColumns"
        >
          <template v-slot:top="props">
            <div class="col-2 q-table__title">Scores</div>
            <q-space />
            <q-select
              v-model="visibleColumns"
              multiple
              borderless
              dense
              options-dense
              :display-value="$q.lang.table.columns"
              emit-value
              map-options
              :options="columns"
              option-value="name"
              style="color: teal-6; min-width:150px;"
              bg-color="grey-8"
              rounded
            />
          </template>
        </q-table>
        <q-btn-dropdown class= "vertical-middle" align="between" push color="primary" icon="cloud_download" label="Export">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>CSV</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>RDS</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>ZIP</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
  </q-page>
</template>

<style lang='stylus' scoped>
 .col + .col
  margin-top 5rem
  #table {
    display: none
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import { QSpinnerGears } from 'quasar'

export default {
  data () {
    return {
      pagination: { rowsPerPage: 50 },
      visibleColumns: ['Latitude', 'Longitude', 'Policy Number', 'Occupancy Code', 'Building Area', 'Total Insured Value', 'Risk Score'],
      columns: [
        { name: 'Latitude', align: 'center', label: 'Latitude', field: 'Latitude' },
        { name: 'Longitude', align: 'center', label: 'Longitude', field: 'Longitude' },
        { name: 'Policy Number', align: 'center', label: 'Policy Number', field: 'Policy Number' },
        { name: 'Occupancy Code', align: 'center', label: 'Occupancy Code', field: 'Occupancy Code' },
        { name: 'Building Area', align: 'center', label: 'Building Area', field: 'Building Area' },
        { name: 'Total Insured Value', align: 'center', label: 'Total Insured Value', field: 'Total Insured Value', sortable: true },
        { name: 'Risk Score', align: 'center', label: 'Risk Score', field: 'Risk Score', sortable: true }
      ],
      data: [
        {
          'Latitude': 30.0155,
          'Longitude': 75.2842,
          'Policy Number': 1658,
          'Occupancy Code': 'Schools, Not Colleges',
          'Building Area': 1762,
          'Total Insured Value': 164657,
          'Risk Score': 16
        },
        {
          'Latitude': 28.2027,
          'Longitude': 65.754,
          'Policy Number': 1226,
          'Occupancy Code': 'Doctors (Offices)',
          'Building Area': 1103,
          'Total Insured Value': 158350,
          'Risk Score': 14
        },
        {
          'Latitude': 25.5223,
          'Longitude': 72.322,
          'Policy Number': 2555,
          'Occupancy Code': 'Convenience Stores',
          'Building Area': 1437,
          'Total Insured Value': 168282,
          'Risk Score': 14
        },
        {
          'Latitude': 22.3729,
          'Longitude': 74.6047,
          'Policy Number': 1073,
          'Occupancy Code': 'Schools, Not Colleges',
          'Building Area': 838,
          'Total Insured Value': 148187,
          'Risk Score': 4
        },
        {
          'Latitude': 26.2723,
          'Longitude': 64.837,
          'Policy Number': 4412,
          'Occupancy Code': 'Restaurant',
          'Building Area': 1467,
          'Total Insured Value': 180603,
          'Risk Score': 4
        },
        {
          'Latitude': 27.2724,
          'Longitude': 71.4241,
          'Policy Number': 1872,
          'Occupancy Code': 'Occupancy Unknown',
          'Building Area': 1234,
          'Total Insured Value': 166985,
          'Risk Score': 20
        },
        {
          'Latitude': 21.2512,
          'Longitude': 72.2964,
          'Policy Number': 2509,
          'Occupancy Code': 'Legal Services',
          'Building Area': 919,
          'Total Insured Value': 148364,
          'Risk Score': 12
        },
        {
          'Latitude': 21.753,
          'Longitude': 73.4752,
          'Policy Number': 3284,
          'Occupancy Code': 'Schools, Not Colleges',
          'Building Area': 972,
          'Total Insured Value': 147435,
          'Risk Score': 3
        },
        {
          'Latitude': 26.4472,
          'Longitude': 70.1534,
          'Policy Number': 1517,
          'Occupancy Code': 'Consultants',
          'Building Area': 837,
          'Total Insured Value': 146590,
          'Risk Score': 6
        },
        {
          'Latitude': 23.7372,
          'Longitude': 69.0264,
          'Policy Number': 1309,
          'Occupancy Code': 'Stores (Without Food)',
          'Building Area': 1004,
          'Total Insured Value': 145396,
          'Risk Score': 16
        },
        {
          'Latitude': 20.4763,
          'Longitude': 67.0763,
          'Policy Number': 2613,
          'Occupancy Code': 'Consultants',
          'Building Area': 1424,
          'Total Insured Value': 168617,
          'Risk Score': 18
        },
        {
          'Latitude': 28.5065,
          'Longitude': 67.7275,
          'Policy Number': 4097,
          'Occupancy Code': 'Doctors (Offices)',
          'Building Area': 1170,
          'Total Insured Value': 149038,
          'Risk Score': 15
        },
        {
          'Latitude': 25.4862,
          'Longitude': 72.7159,
          'Policy Number': 2690,
          'Occupancy Code': 'Consultants',
          'Building Area': 898,
          'Total Insured Value': 179237,
          'Risk Score': 18
        },
        {
          'Latitude': 23.5193,
          'Longitude': 66.5558,
          'Policy Number': 1718,
          'Occupancy Code': 'Apartment Bldgs\\/Condominium Asso',
          'Building Area': 1676,
          'Total Insured Value': 146745,
          'Risk Score': 7
        },
        {
          'Latitude': 20.6648,
          'Longitude': 65.9895,
          'Policy Number': 2492,
          'Occupancy Code': 'Consultants',
          'Building Area': 658,
          'Total Insured Value': 145204,
          'Risk Score': 3
        },
        {
          'Latitude': 30.1012,
          'Longitude': 70.2583,
          'Policy Number': 5136,
          'Occupancy Code': 'Building Contractor',
          'Building Area': 476,
          'Total Insured Value': 169077,
          'Risk Score': 3
        },
        {
          'Latitude': 20.3181,
          'Longitude': 66.983,
          'Policy Number': 3537,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 695,
          'Total Insured Value': 166012,
          'Risk Score': 5
        },
        {
          'Latitude': 29.033,
          'Longitude': 72.3949,
          'Policy Number': 5300,
          'Occupancy Code': 'Offices, Tenant Only, N.O.C.',
          'Building Area': 1152,
          'Total Insured Value': 172369,
          'Risk Score': 14
        },
        {
          'Latitude': 30.1956,
          'Longitude': 69.2678,
          'Policy Number': 5576,
          'Occupancy Code': 'Restaurant',
          'Building Area': 1739,
          'Total Insured Value': 168319,
          'Risk Score': 6
        },
        {
          'Latitude': 20.0947,
          'Longitude': 66.1134,
          'Policy Number': 5335,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': -264,
          'Total Insured Value': 167445,
          'Risk Score': 9
        },
        {
          'Latitude': 28.247,
          'Longitude': 67.5007,
          'Policy Number': 3402,
          'Occupancy Code': 'Public Assembly, N.O.C.',
          'Building Area': 1459,
          'Total Insured Value': 152668,
          'Risk Score': 9
        },
        {
          'Latitude': 27.4568,
          'Longitude': 69.8374,
          'Policy Number': 1798,
          'Occupancy Code': 'Offices, Tenant Only, N.O.C.',
          'Building Area': 1243,
          'Total Insured Value': 152176,
          'Risk Score': 4
        },
        {
          'Latitude': 20.1135,
          'Longitude': 66.581,
          'Policy Number': 1655,
          'Occupancy Code': 'Churches',
          'Building Area': 975,
          'Total Insured Value': 155590,
          'Risk Score': 9
        },
        {
          'Latitude': 25.262,
          'Longitude': 67.1943,
          'Policy Number': 4599,
          'Occupancy Code': 'Apartment Bldgs\\/Condominium Asso',
          'Building Area': 964,
          'Total Insured Value': 140494,
          'Risk Score': 17
        },
        {
          'Latitude': 20.3104,
          'Longitude': 66.3029,
          'Policy Number': 4536,
          'Occupancy Code': 'Legal Services',
          'Building Area': 891,
          'Total Insured Value': 152077,
          'Risk Score': 18
        },
        {
          'Latitude': 21.7901,
          'Longitude': 70.4558,
          'Policy Number': 1618,
          'Occupancy Code': 'Dwellings \\/ Single and Multi-Family (Not Commercial Apartments)',
          'Building Area': 1002,
          'Total Insured Value': 161682,
          'Risk Score': 12
        },
        {
          'Latitude': 25.6005,
          'Longitude': 73.2257,
          'Policy Number': 4031,
          'Occupancy Code': 'Doctors (Offices)',
          'Building Area': 1752,
          'Total Insured Value': 152292,
          'Risk Score': 1
        },
        {
          'Latitude': 25.1753,
          'Longitude': 75.4447,
          'Policy Number': 5570,
          'Occupancy Code': 'Occupancy Unknown',
          'Building Area': 997,
          'Total Insured Value': 173464,
          'Risk Score': 5
        },
        {
          'Latitude': 20.1646,
          'Longitude': 65.6778,
          'Policy Number': 2352,
          'Occupancy Code': 'Offices, Tenant Only, N.O.C.',
          'Building Area': 694,
          'Total Insured Value': 145448,
          'Risk Score': 14
        },
        {
          'Latitude': 24.9274,
          'Longitude': 66.5483,
          'Policy Number': 4603,
          'Occupancy Code': 'Insurance Agent, Real Estate Agent',
          'Building Area': 668,
          'Total Insured Value': 189805,
          'Risk Score': 2
        },
        {
          'Latitude': 26.8692,
          'Longitude': 71.8824,
          'Policy Number': 3822,
          'Occupancy Code': 'Consultants',
          'Building Area': 1061,
          'Total Insured Value': 169776,
          'Risk Score': 3
        },
        {
          'Latitude': 20.1448,
          'Longitude': 75.2234,
          'Policy Number': 3885,
          'Occupancy Code': 'Warehouse (Non. Refrig.)',
          'Building Area': 265,
          'Total Insured Value': 162624,
          'Risk Score': 12
        },
        {
          'Latitude': 24.9145,
          'Longitude': 72.1857,
          'Policy Number': 2998,
          'Occupancy Code': 'Dwellings \\/ Single and Multi-Family (Not Commercial Apartments)',
          'Building Area': 1185,
          'Total Insured Value': 169596,
          'Risk Score': 13
        },
        {
          'Latitude': 26.9112,
          'Longitude': 65.9189,
          'Policy Number': 2172,
          'Occupancy Code': 'Apartment Bldgs\\/Condominium Asso',
          'Building Area': 1243,
          'Total Insured Value': 153046,
          'Risk Score': 13
        },
        {
          'Latitude': 29.4619,
          'Longitude': 71.7134,
          'Policy Number': 5070,
          'Occupancy Code': 'Doctors (Offices)',
          'Building Area': 1254,
          'Total Insured Value': 162918,
          'Risk Score': 10
        },
        {
          'Latitude': 21.2417,
          'Longitude': 71.4955,
          'Policy Number': 3694,
          'Occupancy Code': 'Public Assembly, N.O.C.',
          'Building Area': 1149,
          'Total Insured Value': 149606,
          'Risk Score': 17
        },
        {
          'Latitude': 29.8927,
          'Longitude': 69.657,
          'Policy Number': 1644,
          'Occupancy Code': 'Insurance Agent, Real Estate Agent',
          'Building Area': 1452,
          'Total Insured Value': 156172,
          'Risk Score': 8
        },
        {
          'Latitude': 23.0987,
          'Longitude': 65.5629,
          'Policy Number': 1469,
          'Occupancy Code': 'Building Contractor',
          'Building Area': 786,
          'Total Insured Value': 149077,
          'Risk Score': 13
        },
        {
          'Latitude': 26.5074,
          'Longitude': 68.5604,
          'Policy Number': 1647,
          'Occupancy Code': 'Public Assembly, N.O.C.',
          'Building Area': 933,
          'Total Insured Value': 155579,
          'Risk Score': 10
        },
        {
          'Latitude': 19.8148,
          'Longitude': 67.0852,
          'Policy Number': 2699,
          'Occupancy Code': 'Restaurant',
          'Building Area': 996,
          'Total Insured Value': 149662,
          'Risk Score': 4
        },
        {
          'Latitude': 28.0769,
          'Longitude': 73.2539,
          'Policy Number': 2010,
          'Occupancy Code': 'Doctors (Offices)',
          'Building Area': 1142,
          'Total Insured Value': 156029,
          'Risk Score': 20
        },
        {
          'Latitude': 22.4555,
          'Longitude': 65.3771,
          'Policy Number': 2182,
          'Occupancy Code': 'Office Building, Owner',
          'Building Area': 1415,
          'Total Insured Value': 166558,
          'Risk Score': 10
        },
        {
          'Latitude': 21.4746,
          'Longitude': 67.13,
          'Policy Number': 1164,
          'Occupancy Code': 'Stores (Without Food)',
          'Building Area': 1808,
          'Total Insured Value': 151659,
          'Risk Score': 5
        },
        {
          'Latitude': 22.6827,
          'Longitude': 65.4943,
          'Policy Number': 3689,
          'Occupancy Code': 'Insurance Agent, Real Estate Agent',
          'Building Area': 137,
          'Total Insured Value': 171415,
          'Risk Score': 19
        },
        {
          'Latitude': 26.7553,
          'Longitude': 73.8374,
          'Policy Number': 5909,
          'Occupancy Code': 'Legal Services',
          'Building Area': 524,
          'Total Insured Value': 161170,
          'Risk Score': 1
        },
        {
          'Latitude': 21.6134,
          'Longitude': 74.3368,
          'Policy Number': 1962,
          'Occupancy Code': 'Dentists (Offices)',
          'Building Area': 1458,
          'Total Insured Value': 168337,
          'Risk Score': 2
        },
        {
          'Latitude': 26.9122,
          'Longitude': 65.7402,
          'Policy Number': 2714,
          'Occupancy Code': 'Dwellings \\/ Single and Multi-Family (Not Commercial Apartments)',
          'Building Area': 951,
          'Total Insured Value': 173780,
          'Risk Score': 14
        },
        {
          'Latitude': 28.7926,
          'Longitude': 71.0993,
          'Policy Number': 3742,
          'Occupancy Code': 'Schools, Not Colleges',
          'Building Area': 1276,
          'Total Insured Value': 151433,
          'Risk Score': 17
        },
        {
          'Latitude': 20.7277,
          'Longitude': 68.3398,
          'Policy Number': 4178,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 926,
          'Total Insured Value': 136834,
          'Risk Score': 17
        },
        {
          'Latitude': 28.2596,
          'Longitude': 75.1056,
          'Policy Number': 4483,
          'Occupancy Code': 'Apartment Bldgs\\/Condominium Asso',
          'Building Area': 549,
          'Total Insured Value': 172073,
          'Risk Score': 17
        },
        {
          'Latitude': 28.6523,
          'Longitude': 74.3619,
          'Policy Number': 3734,
          'Occupancy Code': 'Consultants',
          'Building Area': 508,
          'Total Insured Value': 150021,
          'Risk Score': 17
        },
        {
          'Latitude': 28.1378,
          'Longitude': 68.0454,
          'Policy Number': 1688,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 1147,
          'Total Insured Value': 162553,
          'Risk Score': 2
        },
        {
          'Latitude': 28.792,
          'Longitude': 74.1758,
          'Policy Number': 1692,
          'Occupancy Code': 'Warehouse (Non. Refrig.)',
          'Building Area': 799,
          'Total Insured Value': 151692,
          'Risk Score': 17
        },
        {
          'Latitude': 19.944,
          'Longitude': 65.4064,
          'Policy Number': 1306,
          'Occupancy Code': 'Legal Services',
          'Building Area': 357,
          'Total Insured Value': 187601,
          'Risk Score': 20
        },
        {
          'Latitude': 25.4776,
          'Longitude': 69.5343,
          'Policy Number': 3311,
          'Occupancy Code': 'Dwellings \\/ Single and Multi-Family (Not Commercial Apartments)',
          'Building Area': 444,
          'Total Insured Value': 158821,
          'Risk Score': 12
        },
        {
          'Latitude': 23.5292,
          'Longitude': 74.58,
          'Policy Number': 5224,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 1289,
          'Total Insured Value': 171165,
          'Risk Score': 7
        },
        {
          'Latitude': 25.1476,
          'Longitude': 64.5344,
          'Policy Number': 4956,
          'Occupancy Code': 'Public Assembly, N.O.C.',
          'Building Area': 2035,
          'Total Insured Value': 164826,
          'Risk Score': 2
        },
        {
          'Latitude': 23.3289,
          'Longitude': 73.7586,
          'Policy Number': 4298,
          'Occupancy Code': 'Public Assembly, N.O.C.',
          'Building Area': 551,
          'Total Insured Value': 169008,
          'Risk Score': 3
        },
        {
          'Latitude': 21.9506,
          'Longitude': 66.8312,
          'Policy Number': 1543,
          'Occupancy Code': 'Offices, Tenant Only, N.O.C.',
          'Building Area': 560,
          'Total Insured Value': 153900,
          'Risk Score': 2
        },
        {
          'Latitude': 29.6518,
          'Longitude': 74.626,
          'Policy Number': 5166,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 1279,
          'Total Insured Value': 161444,
          'Risk Score': 3
        },
        {
          'Latitude': 23.6382,
          'Longitude': 70.7744,
          'Policy Number': 3455,
          'Occupancy Code': 'Office Building, Owner',
          'Building Area': 1337,
          'Total Insured Value': 169272,
          'Risk Score': 20
        },
        {
          'Latitude': 21.8926,
          'Longitude': 68.522,
          'Policy Number': 5316,
          'Occupancy Code': 'Office Building, Owner',
          'Building Area': 1015,
          'Total Insured Value': 156942,
          'Risk Score': 11
        },
        {
          'Latitude': 29.865,
          'Longitude': 73.6253,
          'Policy Number': 2267,
          'Occupancy Code': 'Office Building, Owner',
          'Building Area': 1368,
          'Total Insured Value': 158181,
          'Risk Score': 10
        },
        {
          'Latitude': 21.4868,
          'Longitude': 74.8211,
          'Policy Number': 1247,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 1025,
          'Total Insured Value': 153415,
          'Risk Score': 9
        },
        {
          'Latitude': 23.849,
          'Longitude': 73.2338,
          'Policy Number': 1200,
          'Occupancy Code': 'Stores (Without Food)',
          'Building Area': 678,
          'Total Insured Value': 148055,
          'Risk Score': 19
        },
        {
          'Latitude': 28.5663,
          'Longitude': 64.2862,
          'Policy Number': 4440,
          'Occupancy Code': 'Legal Services',
          'Building Area': 1132,
          'Total Insured Value': 161720,
          'Risk Score': 6
        },
        {
          'Latitude': 27.3164,
          'Longitude': 66.4811,
          'Policy Number': 3349,
          'Occupancy Code': 'Public Assembly, N.O.C.',
          'Building Area': 874,
          'Total Insured Value': 158546,
          'Risk Score': 11
        },
        {
          'Latitude': 22.3487,
          'Longitude': 75.0351,
          'Policy Number': 1942,
          'Occupancy Code': 'Restaurant',
          'Building Area': 1369,
          'Total Insured Value': 159232,
          'Risk Score': 2
        },
        {
          'Latitude': 28.8209,
          'Longitude': 67.3208,
          'Policy Number': 4592,
          'Occupancy Code': 'Apartment Bldgs\\/Condominium Asso',
          'Building Area': 1638,
          'Total Insured Value': 161973,
          'Risk Score': 18
        },
        {
          'Latitude': 23.8825,
          'Longitude': 73.0567,
          'Policy Number': 3105,
          'Occupancy Code': 'Offices, Tenant Only, N.O.C.',
          'Building Area': 928,
          'Total Insured Value': 158726,
          'Risk Score': 1
        },
        {
          'Latitude': 30.156,
          'Longitude': 63.8659,
          'Policy Number': 2079,
          'Occupancy Code': 'Restaurant',
          'Building Area': 1816,
          'Total Insured Value': 172177,
          'Risk Score': 16
        },
        {
          'Latitude': 27.5612,
          'Longitude': 70.8389,
          'Policy Number': 3008,
          'Occupancy Code': 'Dentists (Offices)',
          'Building Area': 1163,
          'Total Insured Value': 181822,
          'Risk Score': 14
        },
        {
          'Latitude': 27.4428,
          'Longitude': 66.9519,
          'Policy Number': 4658,
          'Occupancy Code': 'Office Building, Owner',
          'Building Area': 816,
          'Total Insured Value': 157826,
          'Risk Score': 10
        },
        {
          'Latitude': 26.209,
          'Longitude': 69.7816,
          'Policy Number': 5694,
          'Occupancy Code': 'Stores (Without Food)',
          'Building Area': 191,
          'Total Insured Value': 171500,
          'Risk Score': 14
        },
        {
          'Latitude': 29.2529,
          'Longitude': 67.7972,
          'Policy Number': 2244,
          'Occupancy Code': 'Building Contractor',
          'Building Area': 1046,
          'Total Insured Value': 155683,
          'Risk Score': 18
        },
        {
          'Latitude': 27.7197,
          'Longitude': 72.0941,
          'Policy Number': 1233,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 1136,
          'Total Insured Value': 146957,
          'Risk Score': 10
        },
        {
          'Latitude': 24.5211,
          'Longitude': 72.6998,
          'Policy Number': 5753,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 1216,
          'Total Insured Value': 158151,
          'Risk Score': 19
        },
        {
          'Latitude': 24.0589,
          'Longitude': 72.4711,
          'Policy Number': 1085,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 1555,
          'Total Insured Value': 166504,
          'Risk Score': 12
        },
        {
          'Latitude': 29.8872,
          'Longitude': 70.5986,
          'Policy Number': 1091,
          'Occupancy Code': 'Office Building, Owner',
          'Building Area': 1338,
          'Total Insured Value': 162519,
          'Risk Score': 14
        },
        {
          'Latitude': 19.6885,
          'Longitude': 66.5793,
          'Policy Number': 5761,
          'Occupancy Code': 'Accounting Services',
          'Building Area': 1274,
          'Total Insured Value': 163707,
          'Risk Score': 16
        },
        {
          'Latitude': 23.378,
          'Longitude': 66.5563,
          'Policy Number': 1804,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 1327,
          'Total Insured Value': 167592,
          'Risk Score': 20
        },
        {
          'Latitude': 24.2953,
          'Longitude': 72.0257,
          'Policy Number': 3085,
          'Occupancy Code': 'Dentists (Offices)',
          'Building Area': 2263,
          'Total Insured Value': 140636,
          'Risk Score': 1
        },
        {
          'Latitude': 27.7964,
          'Longitude': 72.479,
          'Policy Number': 2564,
          'Occupancy Code': 'Public Assembly, N.O.C.',
          'Building Area': 1024,
          'Total Insured Value': 151313,
          'Risk Score': 3
        },
        {
          'Latitude': 23.8637,
          'Longitude': 74.0365,
          'Policy Number': 1402,
          'Occupancy Code': 'Insurance Agent, Real Estate Agent',
          'Building Area': 914,
          'Total Insured Value': 170518,
          'Risk Score': 18
        },
        {
          'Latitude': 20.0914,
          'Longitude': 70.6151,
          'Policy Number': 1280,
          'Occupancy Code': 'Dwellings \\/ Single and Multi-Family (Not Commercial Apartments)',
          'Building Area': 1816,
          'Total Insured Value': 163756,
          'Risk Score': 7
        },
        {
          'Latitude': 24.1365,
          'Longitude': 74.9538,
          'Policy Number': 3131,
          'Occupancy Code': 'Warehouse (Non. Refrig.)',
          'Building Area': 1043,
          'Total Insured Value': 165601,
          'Risk Score': 13
        },
        {
          'Latitude': 25.815,
          'Longitude': 72.521,
          'Policy Number': 4113,
          'Occupancy Code': 'Apartment Bldgs\\/Condominium Asso',
          'Building Area': 684,
          'Total Insured Value': 160810,
          'Risk Score': 11
        },
        {
          'Latitude': 21.5898,
          'Longitude': 67.1776,
          'Policy Number': 4058,
          'Occupancy Code': 'Office Building, Owner',
          'Building Area': 559,
          'Total Insured Value': 159488,
          'Risk Score': 7
        },
        {
          'Latitude': 27.0277,
          'Longitude': 65.5546,
          'Policy Number': 4585,
          'Occupancy Code': 'Stores (Without Food)',
          'Building Area': 690,
          'Total Insured Value': 149876,
          'Risk Score': 7
        },
        {
          'Latitude': 21.8296,
          'Longitude': 67.8431,
          'Policy Number': 5210,
          'Occupancy Code': 'Dwellings \\/ Single and Multi-Family (Not Commercial Apartments)',
          'Building Area': 679,
          'Total Insured Value': 176656,
          'Risk Score': 6
        },
        {
          'Latitude': 22.9667,
          'Longitude': 70.5974,
          'Policy Number': 1817,
          'Occupancy Code': 'Schools, Not Colleges',
          'Building Area': 1202,
          'Total Insured Value': 183244,
          'Risk Score': 18
        },
        {
          'Latitude': 27.3701,
          'Longitude': 73.6999,
          'Policy Number': 4229,
          'Occupancy Code': 'Garages (Auto), Service Stations, Tire Repair',
          'Building Area': 1223,
          'Total Insured Value': 173488,
          'Risk Score': 14
        },
        {
          'Latitude': 28.0738,
          'Longitude': 68.8123,
          'Policy Number': 4726,
          'Occupancy Code': 'Churches',
          'Building Area': 1991,
          'Total Insured Value': 152452,
          'Risk Score': 19
        },
        {
          'Latitude': 26.0874,
          'Longitude': 68.7561,
          'Policy Number': 2078,
          'Occupancy Code': 'Consultants',
          'Building Area': 1243,
          'Total Insured Value': 171523,
          'Risk Score': 12
        },
        {
          'Latitude': 29.366,
          'Longitude': 68.8562,
          'Policy Number': 5388,
          'Occupancy Code': 'Accounting Services',
          'Building Area': 1218,
          'Total Insured Value': 167571,
          'Risk Score': 2
        },
        {
          'Latitude': 20.4836,
          'Longitude': 73.1475,
          'Policy Number': 3942,
          'Occupancy Code': 'Offices, Tenant Only, N.O.C.',
          'Building Area': 630,
          'Total Insured Value': 154609,
          'Risk Score': 10
        },
        {
          'Latitude': 28.059,
          'Longitude': 70.0628,
          'Policy Number': 3334,
          'Occupancy Code': 'Dentists (Offices)',
          'Building Area': 1348,
          'Total Insured Value': 163826,
          'Risk Score': 4
        },
        {
          'Latitude': 29.2839,
          'Longitude': 74.803,
          'Policy Number': 3785,
          'Occupancy Code': 'Apartment Bldgs\\/Condominium Asso',
          'Building Area': 1895,
          'Total Insured Value': 165243,
          'Risk Score': 6
        },
        {
          'Latitude': 22.6178,
          'Longitude': 69.3883,
          'Policy Number': 1799,
          'Occupancy Code': 'Dentists (Offices)',
          'Building Area': 1318,
          'Total Insured Value': 145425,
          'Risk Score': 16
        },
        {
          'Latitude': 25.5689,
          'Longitude': 74.2445,
          'Policy Number': 2806,
          'Occupancy Code': 'Warehouse (Non. Refrig.)',
          'Building Area': 515,
          'Total Insured Value': 166344,
          'Risk Score': 10
        }
      ],
      table: [],
      file: []
    }
  },
  name: 'PageScore',
  methods: {
    ...mapGetters('score', [
      'getScore'
    ]),
    ...mapActions('score', [
      'getScoreApi'
    ]),
    getScores: function () {
      console.log('get scores ran')
      this.$q.loading.show({
        spinner: QSpinnerGears
      })
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
        var x = document.getElementById('table')
        x.style.display = 'block'
      }, 2000)
    }
  },
  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  }
}
</script>
