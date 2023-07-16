// TODO: apply line clamp to Landing page header > Video > Title

export const lineClamp = (lineNumber: Number) => ({
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: lineNumber,
  lineClamp: lineNumber,
  WebkitBoxOrient: 'vertical',
  // '-webkit-box-orient': 'vertical',
});
