# Part 4 - Active filters 

In this section, we will discuss another stage of acquiring
extracellular signals. Extracellular signals are small and "noisy"
(a.k.a. contain a lot of signals that you, personally, may not be
interested in). You can reduce the noise by recording only the range of
frequencies in which your signal varies. By filtering the signal, you
can get rid of everything too slow or too fast to be your signal of
interest.

You have already seen passive filters. Alternatively, we can use op-amps
to make active filters. The advantage of active filters compared to
passive ones is that you can filter and amplify the signal at the same
time. Here are two examples of active filters:

![](./media/image3.jpg){: style="width: 5.927083333333333in; height: 4.76622375328084in;" }

**Question:** Try to figure out which of the above circuits is a low
pass and which one is a high pass filter.

By combining the two circuits above, you can make an inverting bandpass
filter circuit.

![](./media/image11.jpg){: style="width: 4.981503718285214in; height: 2.6406255468066493in;" }

The low-frequency cutoff of this bandpass filter is
$\frac{1}{2\pi R_{1}C_{1}}$, and the high-frequency cutoff,
$\frac{1}{2\pi R_{2}C_{2}}$. As mentioned before, this is an active
circuit that amplifies the signal. The amplification gain $A_{F}$ is
$- \frac{R_{2}}{R_{1}}$(the negative sign indicates that the signal is
inverted). The bandwidth of your filter is determined by the values of
$R_{1},\ R_{2},\ C_{1},\ C_{2}$.

**Question:** To record spikes, what values of low and high cut-off
frequencies would be desirable?

**Exercise 3-1:** Assemble a bandpass filter with the following values
and use it to filter the function generator output.
$$R_{1} = \ 1\ kOhm$$$$C_{1} = \ 0.47µF$$$$R_{2} = \ 220\ kOhm$$$$C_{2} = 560\ pF$$
(The negative pin is the shorter one)

Calculate the theoretical values for frequency cut-offs and gain.

To test the filter, try changing the frequency of the input sine wave.
Try several frequency values between 1 and 10000 Hz.
