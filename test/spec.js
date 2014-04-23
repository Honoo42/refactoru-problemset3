describe("palindrome", function() {
  it("should take a string and reverse it", function() {
    expect('expect').toEqual('tcepxe');
  });
   it("should take a string,reverse it, and return true if the reverse equals the original", function() {
    expect('racecar,racecar').toEqual(true);
  });
});