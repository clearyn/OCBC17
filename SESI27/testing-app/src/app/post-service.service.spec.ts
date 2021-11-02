import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostServiceService } from './post-service.service';

describe('PostServiceService', () => {
  let postService: PostServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PostServiceService
      ],
    });

    postService = TestBed.inject(PostServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it(`should fetch post successfully`, () => {
    const postItem = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat pr",
        "body": "quia et suscipit\nsuspucict recusnandae consequuntur expridta et "
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerun temporere vitae\nsequi sint"
      }

    ]

    postService.getPosts()
    .subscribe((posts: any) => {
      expect(posts.length).toBe(2);
    });

    let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe("GET");

    req.flush(postItem);
    httpMock.verify();

  })

});
