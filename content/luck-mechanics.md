+++
date = '2025-04-20T14:55:59+03:00'
title = 'alternative luck mechanics'
description = 'crazy ways to make your RNG calculations more addictive'
draft = true
+++
i've been experimenting with luck stat mechanics, the traditional way is to just increase rng so the odds of rare stuff happening are higher, but what if you do it a lil different?


- luck spikes:\
you have normal rng but the luck stat increases them like 3-5 times\
    ```(frequency%current roll)==frequency ? base * factor : base```

- luck curves:\
rng is multiplied by a sinewave curve and the luck stat increases the amplitude (still the same on average but i dont like it because it makes your game a bit more addictive)\
    ```base*(luck*(sin*current roll))```

- luck extremities:\
dont have a function but the middle part of say 40%-60% is cut out
