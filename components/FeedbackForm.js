export function FeedbackForm() {

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            if(res.status === 200) {
                alert("Thanks on submitting!");
            }

            document.getElementById("contact-form").reset();
        } catch (e) {
            alert(e)
        }
    };

    return (
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Contact Me</h2>
                <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business
                    plan? Let us know.
                </p>
                <form id="contact-form" name="contact" onSubmit={handleFormSubmit} data-netlify="true" className="space-y-8">
                    <input type="hidden" name="form-name" value="contact"/>
                    <input type="hidden" name="subject" value="New lead from %{formName} (%{submissionId})"/>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium ">
                            Your email
                        </label>
                        <input type="email" id="email" name="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                               required/>
                    </div>
                    <div>
                        <label htmlFor="emailSubject" className="block mb-2 text-sm font-medium">
                            Subject
                        </label>
                        <input type="text" id="emailSubject" name="emailSubject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                               placeholder="Let me know how I can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">
                            Your message
                        </label>
                        <textarea id="message" name="message" rows="6"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pblue-500 dark:focus:border-blue-500"
                                  placeholder="Here you can put more details..."></textarea>
                    </div>
                    <button type="submit"
                            className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send
                        message
                    </button>
                </form>
            </div>
        </section>
    );
}