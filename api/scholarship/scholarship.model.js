const mongoose = require('mongoose')

const ScholarshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hoster: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    }
  },
  tags: [
    {
      name: {
        type: String,
        required: true,
      }
    }
  ],
  target: {
    directedTo: {
      type: String,
      required: true,
    },
    fromUniversity: {
      type: String,
      required: true,
    }
  },
  duration: {
    type: String,
    required: true,
  },
  spots: {
    type: Number,
    required: true,
  },
  requirements: {
    title: {
      type: String,
    },
    list: [
      {
        item: {
          type: String
        }
      }
    ]
  }
}, {
  timestamps: true,
}
)

module.exports = mongoose.model('Scholarship', ScholarshipSchema)
