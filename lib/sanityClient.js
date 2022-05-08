import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'vc1f8zhs',
    dataset : 'production',
    apiVersion : '2021-03-25',
    useCdn : false,
    token : 'skHMtHINaTwwCGNAQATmfBU74L03csOxGWjLd7mMdOD8OmUHUmmSmCoywV8A1n9BanVfIGkQbAkch2m90275GcJ5VUjYa4E6ks7uBwXFk2cJoSSWFsRnldKIsScpUlE7uYWeBsypTe8jVD90wRXM3Nlxs1Vo59cegvxTgmSJyXzckF7SfZ5n'
});