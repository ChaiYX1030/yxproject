
const mapListItemFromApi = item => ({
  id: item.id,
  name: item.name,
  fullName: item.full_name,
  description: item.description,
  numberOfStars: item.stargazers_count,
  numberOfForks: item.forks_count,
  numberOfWatchers: item.watchers_count,
  language: item.language,
  visibility: item.visibility,
  license: item.license ? item.license.name : null,
});

export const mapListFromApi = data =>
  data.map(d => mapListItemFromApi(d));