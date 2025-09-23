import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPostsPage } from './list-posts.page';

describe('ListPostsPage', () => {
  let component: ListPostsPage;
  let fixture: ComponentFixture<ListPostsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
