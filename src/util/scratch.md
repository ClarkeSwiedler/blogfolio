So, if a is the size of your square and the coordinate of your points are A(0,0), B(0,a), C(a,0), D(a,a), then the Hue of a point E(x,y) can be computed with:

Hue(E) = ( Hue(B)*y/a + Hue(A)*(1-y/a) ) * (x/a)  +  ( Hue(D)*y/a + Hue(C)*(1-y/a) ) * (1-x/a)

where Hue(A) is the Hue of point A, Hue(B) the Hue of B, etc...

You apply the same formulae for the Saturation and Value.

