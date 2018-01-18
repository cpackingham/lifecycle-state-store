import ShallowStateUpdate from '../src/ShallowStateUpdate';

describe('shallow state update object', () => {
  it('should be constructable', () => {
    const shallowUpdateObj = new ShallowStateUpdate({}, {}, []);
    expect(shallowUpdateObj).toBeTruthy()
  })
})