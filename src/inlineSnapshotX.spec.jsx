import React from 'react';
import TestRenderer from 'react-test-renderer';

it('Should produce inline snapshot', () => {
  const result = TestRenderer.create(<span>test</span>).toJSON();
  expect(result).toMatchInlineSnapshot();
});
