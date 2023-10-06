// bring in DB and query method
import { database, Query } from "@/libs/AppWriteClient"

//function expects a userId with data type string
const useGetProfileByUserId = async (userId: string) => {
    try {
        // get all data from user profile collection in DB
        const response = await database.listDocuments(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE), 
            [ 
                Query.equal('user_id', userId) 
            ]
        );
        
        const documents = response.documents;
        //return back all user data
        return {
            id: documents[0]?.$id,
            user_id: documents[0]?.user_id,
            name: documents[0]?.name,
            image: documents[0]?.image,
            bio: documents[0]?.bio
        }
      } catch (error) {
          throw error
      }
}

export default useGetProfileByUserId