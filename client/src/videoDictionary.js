export function getIframeUrl(url) {
  let provider = url.replace("https://", "")
  provider = provider.substring(0, provider.indexOf("/"))
  console.log(provider)
 
      if (/youtube/gi.test(provider)){
        return formatUrl(url, "youtube")
      } else if(/rumble/gi.test(provider)){
          return formatUrl(url, "rumble")
      } else if(/vimeo/gi.test(provider)){
          return formatUrl(url,"vimeo")
      }
  }
function formatUrl(url, provider){
if (provider==="youtube"){
  let id =url.split("=")[1]
  return `https://www.youtube.com/embed/${id}`
} else if(provider==="rumble"){
    return url
}else if (provider==="vimeo"){
    let id =url.replace("https://", "").split("/")[1]
    return `https://player.vimeo.com/video/${id}`
}
}
/*  <iframe
    class="rumble"
    width="640"
    height="360"
    src="https://rumble.com/embed/vbb9b1/?pub=4"
    frameborder="0"
    allowfullscreen
  ></iframe>;*/