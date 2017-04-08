export const getContributors = () => (
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/contributors/'
  })
);

export const deleteContributor = id => (
  $.ajax({
    type: 'DELETE',
    url: `http://localhost:3000/api/contributors/${id}`
  })
);

export const postContributors = contributors => (
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/contributors/',
    data: JSON.stringify(contributors),
    contentType: "application/json"
  })
);
