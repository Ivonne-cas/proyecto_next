import Link from "next/link";

import { resolve } from "styled-jsx/css";
async function fetchInfoUsers (){
    //https://api.github.com/search/users?q=greg
    const res = await fetch ("https://api.github.com/search/users?q=greg",{
      next:{
        revalidate:60
      }
    });

    await new Promise((resolve) => setTimeout(resolve,1000));
    const users =await res.json();
    return users.items;
}

const InfoUsers = async() => {
    const users =await fetchInfoUsers();
    console.log(users);
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Reposr</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => ( 
       /* row 1 */
        <tr key={user.id}>
          <td>
              <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.avatar_url} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.login}</div>
                    <div className="text-sm opacity-50">{user.id}</div>
                  </div>
              </div>
          </td>
          <td>
            <Link href={user.html_url} className="btn btn-Link">VIEW ON GITHUB</Link>  
          </td>    
          <th>
            <Link href={`/infousers/${user.login}`} className="btn btn-Link">
            go to repos
            </Link>
          </th>
        </tr>
      
      ))}
    </tbody>   
  </table>
</div>
    );
}
export default InfoUsers;