import moment from "moment";
export const VIDEOS = [
	{
		id: 1,
		img_thumbanil: "https://i.ytimg.com/vi/NtfbWkxJTHw/sddefault.jpg",
		title: "Problem-Solving for Developers - A Beginner's Guide",
		description:
			"How to approach problem-solving as a developer 🤔. Seven steps and strategies to solve software development challenges faster. ",
		VIDEO: {
			vidoUrl: "https://youtu.be/UFc-RPbq8kg?si=LTZVJCZQG9qK0FVq",
			likes: 0,
			dislikes: 0,
			comments: [
				{
					comment_creator: "RoundSkills",
					data: moment(new Date()).format(),
					comment:
						"I can't get enough of your videos. Hope you stay healthy in these difficult times. 👍🏼👍🏼👍🏼",
				},
			],
		},
	},

	{
		id: 2,
		img_thumbanil: "https://i.ytimg.com/vi/FM3jv3U9Nh8/maxresdefault.jpg",
		title: "كيف تصمم بيئة النجاح؟",
		description: "كيف تصمم بيئة الجاح",
		VIDEO: {
			vidoUrl: "https://youtu.be/FM3jv3U9Nh8?si=qtqEKAJm_O1kyhoF",
			likes: 0,
			dislikes: 0,
			comments: [
				{
					comment_creator: "RoundSkills",
					data: moment(new Date()).format(),
					comment:
						"هذه الشخص اسطورة في الإقنااااع والذكاء والكاريزما وتبسيط المعلومات وجعلها اكثر من سلسلة وشيقة تبارك الله، هذه هي الشخصيات التي لا نمل منها ابدًا🖤.",
				},
			],
		},
	},
];
