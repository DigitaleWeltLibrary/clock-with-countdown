![assets/image.png](assets/image.png)

# Clock with Countdown

A simple and customizable browser clock with an integrated countdown feature. Countdown times are saved locally, ensuring they persist even after you close the tab.

## Simple Clock

A straightforward clock that allows you to see the current time in your browser tab. You can also set countdowns, which are saved to **localStorage** to ensure they're safe if you accidentally close the tab.

## Countdown

### Create a Countdown

Click on the small box labeled **SET COUNTDOWN** on the top right of the clock. A box will appear, allowing you to create the countdown.

![assets/image2.png](assets/image2.png)

When you click on the underlined word, you can change the countdown between **today** and **another day**. Click the button to create the countdown. (The countdown is saved to **localStorage** and will reappear even if you close and reopen the tab.) The countdown is shown below the clock.

![assets/image3.png](assets/image3.png)

### Good to Know

  * You can see the exact end time of the countdown at the bottom of its box.
  * Next to it, you can **delete** the countdown by clicking on **delete countdown**.
  * If you create a new countdown while one is already running, the existing one will be replaced with the new one.

## How to Clone and Run the Project

1.  First, copy the GitHub download link.

    ```bash
    git clone https://github.com/DigitaleWeltLibrary/clock-with-countdown
    ```

2.  Then, the repository will be cloned into your directory.

3.  After that, you need to install the Node.js packages.

    ```bash
    npm install
    ```

4.  You're now ready to start the app\!

    ```bash
    npm run dev
    ```

## Used Technologies

  * Vite
  * React
  * FontAwesomeIcon
