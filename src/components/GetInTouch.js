const GetInTouch = () => (
  `<div class="GetInTouch" id="section6">
            <h1>Get In Touch</h1>
            <form>
                <h3>Contact Form</h3>
                <div id="join">
                    <div>
                        <label for="fname">First name</label><br>
                        <input type="text" id="fname" name="fname"><br>
                    </div>
                    <div>
                        <label for="lname">Last name</label><br>
                        <input type="text" id="lname" name="lname" ><br><br>
                    </div>
                </div>
                <label for="fmail">Email</label><br>
                <input type="text" id="fmail" name="fmail"><br>
                <label for="fsubjc">Subject</label><br>
                <input type="text" id="fsubjc" name="fsubjc"><br>
                <label for="fname">Message</label><br>
                <textarea id="fmsg" name="fmsg" rows="8" cols="45"></textarea>
                <input type="submit" value="Send Message" class="button">
            </form>
        </div>`
);

export default GetInTouch;
