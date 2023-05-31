
import filterData from './filterData';

const mockPosts = [{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
},
{
  userId: 1,
  id: 2,
  title: 'qui est esse',
  body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
},
{
  userId: 1,
  id: 3,
  title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
},
{
  userId: 2,
  id: 4,
  title: 'eum et est occaecati',
  body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
}];

const mockComments = [  {
  postId: 3,
  id: 11,
  name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
  email: 'Veronica_Goodwin@timmothy.net',
  body: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea'
},
{
  postId: 3,
  id: 12,
  name: 'modi ut eos dolores illum nam dolor',
  email: 'Oswald.Vandervort@leanne.org',
  body: 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit'
},
{
  postId: 3,
  id: 13,
  name: 'aut inventore non pariatur sit vitae voluptatem sapiente',
  email: 'Kariane@jadyn.tv',
  body: 'fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et'
},
{
  postId: 3,
  id: 14,
  name: 'et officiis id praesentium hic aut ipsa dolorem repudiandae',
  email: 'Nathan@solon.io',
  body: 'vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum'
},
{
  postId: 4,
  id: 15,
  name: 'debitis magnam hic odit aut ullam nostrum tenetur',
  email: 'Maynard.Hodkiewicz@roberta.com',
  body: 'nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia'
}];

describe('filterData', () => {
  it('filters posts', () => {
    expect(filterData(mockPosts, 'userId', 1).length).toEqual(3);
  });

  it('filters comments', () => {
    expect(filterData(mockComments, 'postId', 3).length).toEqual(4);
  });
});