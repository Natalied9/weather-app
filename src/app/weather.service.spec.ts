import { TestBed, inject } from '@angular/core/testing';

import { movieService } from './movie.service';

describe('movieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [movieService]
    });
  });

  it('should be created', inject([movieService], (service: movieService) => {
    expect(service).toBeTruthy();
  }));
});
