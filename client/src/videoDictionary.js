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
      }else if(/bitchute/gi.test(provider)){
        return formatUrl(url, "bitchute")
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
}else if (provider ==="bitchute"){
  return url.replace("video", "embed")
}
}
