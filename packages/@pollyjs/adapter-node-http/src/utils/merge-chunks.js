export default function mergeChunks(chunks) {
  if (!chunks || chunks.length === 0) {
    return Buffer.alloc(0);
  }

  // We assume that all chunks are Buffer objects if the first is buffer object.
  if (!Buffer.isBuffer(chunks[0])) {
    // When the chunks are not buffers we assume that they are strings.
    return chunks.join('');
  }

  // Merge all the buffers into a single Buffer object.
  return Buffer.concat(chunks);
}
