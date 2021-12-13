 function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
    return gifts==[]?[]:["*".repeat(gifts[0].length+2),...gifts.map(g=>"*"+g+"*"),"*".repeat(gifts[0].length+2)]
  }

