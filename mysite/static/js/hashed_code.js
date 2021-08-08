const SHA_OBJ = new jsSHA("SHA-256","TEXT");
function hash_code(text) {
  SHA_OBJ.update(text);
  let id_return = SHA_OBJ.getHash("HEX");
  return id_return;
}
