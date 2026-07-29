const QUIZZES = {
  pre: [
    {
      icon: '💬',
      ar: {
        q: 'خلال اجتماع، قال أحد أعضاء الفريق: "هذه الفكرة لن تنجح إطلاقًا". لاحظت أن بقية الفريق صمتوا، ولم يعد أحد يشارك. ما الخطوة الأولى الأكثر فاعلية؟',
        o: ['الدفاع عن الفكرة.', 'تجاهل التعليق.', 'سؤال المعترض عن الأسباب وطلب بدائل مع تشجيع بقية الفريق على المشاركة.', 'الانتقال مباشرة إلى الموضوع التالي.']
      },
      en: {
        q: 'During a meeting, a team member said: "This idea will never work." You noticed the rest of the team went silent. What is the most effective first step?',
        o: ['Defend the idea.', 'Ignore the comment.', 'Ask the objector for reasons and request alternatives while encouraging others to participate.', 'Move directly to the next topic.']
      },
      answer: 2
    },
    {
      icon: '👥',
      ar: {
        q: 'أثناء التدريب، أحد المشاركين يجيب عن جميع الأسئلة قبل الآخرين. بعد مرور 20 دقيقة بدأ المشاركون الآخرون في الانسحاب من النقاش. ما الخطأ الذي ارتكبه المدرب؟',
        o: ['أعطى معلومات كثيرة.', 'لم يدير ديناميكية المجموعة بشكل متوازن.', 'استخدم وسائل عرض كثيرة.', 'طرح أسئلة مفتوحة.']
      },
      en: {
        q: 'During training, one participant answers all questions before others. After 20 minutes, other participants started withdrawing. What mistake did the trainer make?',
        o: ['Gave too much information.', 'Failed to balance group dynamics.', 'Used too many visual aids.', 'Asked open-ended questions.']
      },
      answer: 1
    },
    {
      icon: '⏱️',
      ar: {
        q: 'قال المدير: "أحتاج التقرير بسرعة". الموظف أرسله الساعة الرابعة عصرًا، والمدير كان يقصده خلال ساعة. أي عنصر فشل؟',
        o: ['الرسالة.', 'التغذية الراجعة.', 'تحديد التوقعات.', 'المرسل.']
      },
      en: {
        q: 'The manager said: "I need the report quickly." The employee sent it at 4 PM, but the manager meant within an hour. Which element failed?',
        o: ['The message.', 'The feedback.', 'Setting expectations.', 'The sender.']
      },
      answer: 2
    },
    {
      icon: '👁️',
      ar: {
        q: 'أحد المستفيدين يقول: "أنا بخير"، لكنه يتجنب التواصل البصري، يتحدث بصوت منخفض، ويبدو متوترًا. ما التصرف المهني؟',
        o: ['افتراض أنه يكذب.', 'الاعتماد على لغة الجسد فقط.', 'ملاحظة التناقض وطرح أسئلة استكشافية دون إصدار أحكام.', 'إنهاء المقابلة.']
      },
      en: {
        q: 'A beneficiary says: "I am fine," but avoids eye contact, speaks quietly, and looks tense. What is the professional response?',
        o: ['Assume they are lying.', 'Rely solely on body language.', 'Notice the discrepancy and ask exploratory questions without judgment.', 'End the interview.']
      },
      answer: 2
    },
    {
      icon: '🧘',
      ar: {
        q: 'خلال إحدى الجلسات، لاحظت أن ثلاثة مشاركين عقدوا أذرعهم في الوقت نفسه. ما أفضل استنتاج؟',
        o: ['جميعهم يرفضون الفكرة.', 'جميعهم غاضبون.', 'لا يمكن تفسير الإشارة بمعزل عن السياق.', 'يريدون إنهاء الاجتماع.']
      },
      en: {
        q: 'During a session, you noticed three participants crossed their arms simultaneously. What is the best conclusion?',
        o: ['They all reject the idea.', 'They are all angry.', 'The signal cannot be interpreted in isolation from context.', 'They want to end the meeting.']
      },
      answer: 2
    },
    {
      icon: '🛑',
      ar: {
        q: 'أثناء جلسة عصف ذهني، بدأ أحد المشاركين يهاجم الأشخاص بدلًا من الأفكار. ما التصرف الأكثر احترافية؟',
        o: ['الرد عليه بنفس الأسلوب.', 'تجاهل الهجوم.', 'إعادة توجيه النقاش إلى الأفكار مع وضع حدود واضحة للحوار.', 'إنهاء الاجتماع فورًا.']
      },
      en: {
        q: 'During a brainstorming session, a participant started attacking people instead of ideas. What is the most professional action?',
        o: ['Respond in the same manner.', 'Ignore the attack.', 'Redirect discussion back to ideas while setting clear boundaries.', 'End the meeting immediately.']
      },
      answer: 2
    },
    {
      icon: '👂',
      ar: {
        q: 'أي العبارات التالية تعكس استماعًا نشطًا؟',
        o: ['"أنا فاهم."', '"تقصد أن سبب المشكلة هو ضغط الوقت، هل فهمت بشكل صحيح؟"', '"لا، أنت مخطئ."', '"دعني أشرح لك."']
      },
      en: {
        q: 'Which of the following statements reflects active listening?',
        o: ['"I understand."', '"You mean the cause of the problem is time pressure, did I understand correctly?"', '"No, you are wrong."', '"Let me explain to you."']
      },
      answer: 1
    },
    {
      icon: '🔄',
      ar: {
        q: 'في أي موقف تكون إعادة الصياغة غير مناسبة؟',
        o: ['عند التأكد من الفهم.', 'عند وجود سوء فهم.', 'عندما يكون المطلوب اتخاذ قرار عاجل دون الحاجة لتوضيح إضافي.', 'أثناء جلسة إرشاد.']
      },
      en: {
        q: 'In which situation is paraphrasing inappropriate?',
        o: ['When confirming understanding.', 'When there is a misunderstanding.', 'When an urgent decision is required without need for additional clarification.', 'During a counseling session.']
      },
      answer: 2
    },
    {
      icon: '🤝',
      ar: {
        q: 'أي السلوكيات التالية تُضعف الثقة أكثر؟',
        o: ['الحديث بسرعة.', 'استخدام مصطلحات صعبة.', 'تعارض لغة الجسد مع الرسالة المنطوقة.', 'كثرة الأمثلة.']
      },
      en: {
        q: 'Which of the following behaviors weakens trust the most?',
        o: ['Speaking quickly.', 'Using difficult terminology.', 'Contradiction between body language and spoken message.', 'Giving too many examples.']
      },
      answer: 2
    },
    {
      icon: '🗣️',
      ar: {
        q: 'إذا كنت تيسر ورشة توعوية وظهر شخص مسيطر، فما الهدف الأول لتدخلك؟',
        o: ['إيقافه.', 'تقليل مشاركته.', 'ضمان مشاركة جميع أعضاء الفريق دون إقصاء أحد.', 'إنهاء الاجتماع.']
      },
      en: {
        q: 'If you are facilitating an awareness workshop and a dominant person emerges, what is the primary goal of your intervention?',
        o: ['Stop them.', 'Reduce their participation.', 'Ensure participation of all team members without excluding anyone.', 'End the meeting.']
      },
      answer: 2
    }
  ],
  post: [
    {
      icon: '👁️',
      ar: { q: 'إذا كانت لغة الجسد تتعارض مع الكلمات، فمن الأفضل دائمًا تصديق لغة الجسد.', o: ['نعم', 'لا'] },
      en: { q: 'If body language conflicts with words, it is always best to believe body language.', o: ['Yes', 'No'] },
      answer: 1
    },
    {
      icon: '👂',
      ar: { q: 'الاستماع الفعّال يعني الصمت حتى ينتهي المتحدث من الكلام.', o: ['نعم', 'لا'] },
      en: { q: 'Active listening simply means remaining silent until the speaker finishes talking.', o: ['Yes', 'No'] },
      answer: 1
    },
    {
      icon: '📬',
      ar: { q: 'يمكن أن تكون الرسالة واضحة للمرسل، لكنها تُفهم بطريقة مختلفة من المستقبل.', o: ['نعم', 'لا'] },
      en: { q: 'A message can be clear to the sender, yet understood differently by the receiver.', o: ['Yes', 'No'] },
      answer: 0
    },
    {
      icon: '🔄',
      ar: { q: 'التغذية الراجعة تُستخدم فقط لتصحيح الأخطاء.', o: ['نعم', 'لا'] },
      en: { q: 'Feedback is used solely to correct mistakes.', o: ['Yes', 'No'] },
      answer: 1
    },
    {
      icon: '🌍',
      ar: { q: 'الاختلاف في الخلفية الثقافية قد يؤدي إلى سوء فهم حتى عند استخدام الكلمات نفسها.', o: ['نعم', 'لا'] },
      en: { q: 'Differences in cultural background may lead to misunderstandings even when using the exact same words.', o: ['Yes', 'No'] },
      answer: 0
    },
    {
      icon: '🗣️',
      ar: { q: 'الشخص كثير الكلام يجب مقاطعته مباشرة حتى لا يضيع وقت الاجتماع.', o: ['نعم', 'لا'] },
      en: { q: 'A talkative person should be interrupted immediately to avoid wasting meeting time.', o: ['Yes', 'No'] },
      answer: 1
    },
    {
      icon: '💬',
      ar: { q: 'إعادة صياغة كلام المتحدث تعني تكرار كلماته حرفيًا.', o: ['نعم', 'لا'] },
      en: { q: 'Paraphrasing the speaker’s words means repeating them verbatim.', o: ['Yes', 'No'] },
      answer: 1
    },
    {
      icon: '🎯',
      ar: { q: 'الهدف من التواصل الفعّال هو أن يقتنع الطرف الآخر دائمًا برأيك.', o: ['نعم', 'لا'] },
      en: { q: 'The goal of effective communication is to always convince the other party of your opinion.', o: ['Yes', 'No'] },
      answer: 1
    },
    {
      icon: '🧠',
      ar: { q: 'يمكن للمدرب أن يغيّر سلوك المشاركين من خلال أسلوب تواصله حتى لو لم يغيّر شخصياتهم.', o: ['نعم', 'لا'] },
      en: { q: 'A trainer can change participants’ behavior through their communication style even without changing their personalities.', o: ['Yes', 'No'] },
      answer: 0
    },
    {
      icon: '❓',
      ar: { q: 'إذا لم يطلب المستمع توضيحًا، فهذا يعني أنه فهم الرسالة بشكل صحيح.', o: ['نعم', 'لا'] },
      en: { q: 'If the listener does not ask for clarification, it means they understood the message correctly.', o: ['Yes', 'No'] },
      answer: 1
    }
  ]
};