import $ from 'jquery';

const getApiData = url => $.ajax({
  url,
  type: 'GET',
});

const putApiData = (url, data) => $.ajax({
  url,
  type: 'PUT',
  data,
});

export default {
  getApiData,
  putApiData,
};
