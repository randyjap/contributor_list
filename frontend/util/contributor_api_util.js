export const getContributors = () => (
  $.ajax({
    method: 'GET',
    url: '/api/contributors/'
  })
);

export const deleteContributor = id => (
  $.ajax({
    type: 'DELETE',
    url: `/api/contributors/${id}`
  })
);

export const postContributors = contributors => (
  $.ajax({
    type: 'POST',
    url: '/api/contributors/',
    data: JSON.stringify(contributors),
    contentType: "application/json"
  })
);
