
// var words = [ "ground", "control", "to", "major", "tom" ];

// map( words, function ( word )
// {
//     return word.length;
// } );

// map( words, function ( word )
// {
//     return word.toUpperCase();
// } );

// map( words, function ( word )
// {
//     return word.split( '' ).reverse().join( '' );
// } );

var words = [ "ground", "control", "to", "major", "tom" ];

function map ( array, callback )
{
    var empty = []
    for ( var i = 0; i < array.length; i++ )
    {
        var resultFromThisCallBack = callback( array[ i ] )
        empty.push( resultFromThisCallBack )
        //result from this loop will go into "var empty = [0]"
    }
    console.log( empty )
}

map( words, function ( word )
{
    return word.length;
} )


map( words, function ( word )
{
    return word.toUpperCase();
} );

map( words, function ( word )
{
    return word.split( '' ).reverse().join( '' );
} );
