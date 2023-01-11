

/* -------------------------------------------------------------------------- */
/*                                   예시코드 시작                                  */
/* -------------------------------------------------------------------------- */

class Model {
  #data;
  constructor(initialData) {
    this.#data = initialData;
  }
  getData() { return this.#data; }
  setData(newData) { this.#data = newData; }
}

// Model 클래스로부터 bookModel 인스턴스(객체) 생성
const bookModel = new Model([{ id: 'book-1', title: '기분이 태도가 되지 않도록' }]);

// getData 메서드를 사용해 데이터 가져오기
bookModel.getData();

// setData 메서드를 사용해 데이터 업데이트 하기
bookModel.setData([...bookModel.getData(), { id: 'book-2', title: '참 괜찮은 태도' }]);

//일반 객체와 달리 클래스는 상속을 활용해 서브 클래스를 생성할 수도 있습니다.
class BookModel extends Model {
  getById(bookId) { return this.getData().find(book => book.id === bookId); }
  getByTitle(bookTitle) { return this.getData().find(book => book.title === bookTitle); }
}

const bookMode2 = new BookModel([
  { id: 'book-1', title: '기분이 태도가 되지 않도록' }, 
  { id: 'book-2', title: '참 괜찮은 태도' }
]);

const book2Data = bookModel.getById('book-2');

//뿐만 아니라 클래스에 연결된 프로토타입을 확장해 모든 인스턴스가 사용할 수 있도록 할 수 있습니다.
BookModel.prototype.filterByTitle = function(query) {
  return this.getData().filter(book => book.title.includes(query));
};

const filteredBooks = bookModel.filterByTitle('태도');


/* -------------------------------------------------------------------------- */
/*                       이제부터는 유사하게 구현한 함수의 예시                  */
/* -------------------------------------------------------------------------- */

function createModel(initialData) {
  let data = initialData;
  return {
    getData() { return data; },
    setData(newData) { data = newData; }
  };
}

// createModel 함수를 실행해 bookModel 객체 생성
const bookModel3 = createModel([{ id: 'book-1', title: '기분이 태도가 되지 않도록' }]);

// getData 메서드를 사용해 데이터 가져오기
bookModel3.getdata();
// setData 메서드를 사용해 데이터 업데이트 하기
bookModel3.setData([...bookModel3, { id: 'book-2', title: '참 괜찮은 태도' }]);



