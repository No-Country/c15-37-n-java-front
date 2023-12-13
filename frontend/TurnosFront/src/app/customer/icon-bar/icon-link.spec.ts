import { IconLink } from './icon-link';

const val= {
    icon: "twitter",
    url: "#"
  };

describe('IconLink', () => {
  const icon =new IconLink(val);
  
  it('should create an instance', () => {
    expect(icon).toBeTruthy();
  });

  it('icon should twitter', () => {
    expect(icon.icon).toEqual("twitter");
  });

  it('url should #', () => {
    expect(icon.url).toEqual("#");
  });

});
