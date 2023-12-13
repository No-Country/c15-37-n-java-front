import { TextLink } from './text-link';
const val= {
    text: "nosotros",
    url: "#"
  };


describe('TextLink', () => {
  const lnk = new TextLink(val);
  it('should create an instance', () => {
    expect(lnk).toBeTruthy();
  });

  it('url should be #', () => {
    expect(lnk.url).toEqual("#");
  });
  
  it('tex should be nosotros', () => {
    expect(lnk.text).toEqual("nosotros");
  });

});
