import { StatusTransformerPipe } from './status-transformer.pipe';

describe('StatusTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});
