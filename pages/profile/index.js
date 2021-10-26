// Nested Pages >
//  domain/about (www.doman-name.com/profile)  ==>  runs index.js inside of profile folder


function Profile() {
    return (
        <div>
            Profile Page
            <table>
                <tr>
                    <td>Full Name:</td>
                    <td>Olcay Kaplan</td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Age:</td>
                    <td>25</td>
                </tr>
            </table>
        </div>
    )
}

export default Profile
