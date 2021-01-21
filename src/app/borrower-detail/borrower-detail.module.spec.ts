import { BorrowerDetailModule } from './borrower-detail.module';

describe('BorrowerDetailModule', () => {
  let borrowerDetailModule: BorrowerDetailModule;

  beforeEach(() => {
    borrowerDetailModule = new BorrowerDetailModule();
  });

  it('should create an instance', () => {
    expect(borrowerDetailModule).toBeTruthy();
  });
});
