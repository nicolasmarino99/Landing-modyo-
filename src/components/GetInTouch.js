const GetInTouch = () => (
  `<div class="GetInTouch">
            <h1>Get In Touch</h1>
            <form>
                <h3>Contact Form</h3>
                <label for="fname">First name</label><br>
                <input type="text" id="fname" name="fname"><br>
                <label for="lname">Last name</label><br>
                <input type="text" id="lname" name="lname" ><br><br>
                <label for="fmail">Email</label><br>
                <input type="text" id="fmail" name="fmail"><br>
                <label for="fsubjc">Subject</label><br>
                <input type="text" id="fsubjc" name="fsubjc"><br>
                <label for="fname">Message</label><br>
                <input type="text" id="fmsg" name="fmsg"><br>
                <input type="submit" value="Send Message">
            </form>
        </div>`
);

export default GetInTouch;
