import Vue from 'vue';
import Helpers from '@/core/helpers';
import moment from 'moment';

Vue.filter('date', (value: string) => value ? moment(value).format('L') : Helpers.Filters.EmptyText());
Vue.filter('empty', (value: string) => value || Helpers.Filters.EmptyText());